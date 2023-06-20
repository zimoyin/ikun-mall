/*
 * 框架打包程序
 * Copyright (c) 2023.  zimo
 * This project is licensed under the GNU Affero General Public License, version 3 (GNU AGPLv3).
 * Copyright Owner: zimo
 *
 *  License terms and conditions can be found at the following link:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 *
 * Unless required by applicable law or agreed to in writing, this project is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 *
 */

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;

public class Main {

    private static final String SingleQuotationMark = "\\\\'";
    private static final String SingleQuotationMarkS = "'";
    private static final String DoubleQuotationMark = "\\\\\"";
    private static final String DoubleQuotationMarkS = "\"";

    public static void main(String[] args) throws IOException {
        //File file0 = new File("D:\\web\\模块化开发框架-zimo\\slot");
        File file0 = new File("../../slot");
        File[] files = file0.listFiles(pathname -> pathname.getName().endsWith(".html"));
        System.out.println(Arrays.toString(files));
        StringBuffer buffer = new StringBuffer();
        buffer.append("function getSlotAll () {\n" + "  return {");
        if (files != null) for (File file : files) {
            System.out.println(file);
            List<String> lines = Files.readAllLines(Paths.get(file.toURI()));
            buffer.append(file.getName(), 0, file.getName().lastIndexOf("."))
                    .append(":");
            for (String line : lines) {
                if (line == null || line.equals("") || line.equals("\n")) continue;
                buffer.append(DoubleQuotationMarkS)
                        .append(
                            line.replaceAll(SingleQuotationMarkS, SingleQuotationMark)
                            .replaceAll(DoubleQuotationMarkS, DoubleQuotationMark)
                            .replaceAll("\\.\\./","")
                            .trim()
                        )
                        .append("\\n")
                        .append(DoubleQuotationMarkS)
                        .append("+")
                        .append("\n");
            }
            buffer.setCharAt(buffer.length() - 2, ' ');
            buffer.append(",");
        }
        buffer.setCharAt(buffer.length() - 1, '}');
        buffer.append("\n" + "}");
        System.out.println(buffer);

//        FileOutputStream stream = new FileOutputStream(file0.getPath() + "\\" + "out.js");
        FileWriter fileWriter = new FileWriter(file0.getPath() + "\\" + "out.js");
        fileWriter.write(buffer.toString());
        fileWriter.close();
         System.out.println();
         System.out.println();
         System.out.println("OK");
    }
}