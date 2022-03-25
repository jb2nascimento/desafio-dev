package sistema;

import org.junit.runner.RunWith;
import com.hpe.alm.octane.*;
import cucumber.api.CucumberOptions;

@RunWith(OctaneCucumber.class)
@CucumberOptions(plugin={"junit:junitResult.xml"},
                 features = "Features/Validacao health.feature",
                 monochrome = true,
                 glue = "Steps")
public class CheckHealtTest {

}
