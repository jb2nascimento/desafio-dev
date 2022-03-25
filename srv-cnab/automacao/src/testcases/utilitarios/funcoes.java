package utilitarios;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.apache.commons.lang3.StringUtils;

public class funcoes {

    public static String ReturnEnvironment() {
        String vEnvironment;
        vEnvironment = System.getProperty("environment");
        if(StringUtils.isEmpty(vEnvironment)) vEnvironment = "DEV";
        return vEnvironment;
    }

    public static Properties getprop() throws IOException {

        Properties props = new Properties();
        FileInputStream file = new FileInputStream("./properties/dados.properties");
        props.load(file);

        return props;
    }
}
