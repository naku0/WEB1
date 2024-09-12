import com.fastcgi.FCGIInterface;

import java.nio.charset.StandardCharsets;

public class ResponseHandler {
    boolean isInFigure;
    long startTime;
    public ResponseHandler(boolean flag, long time) {
        this.isInFigure = flag;
        this.startTime = time;
    }

    public void sendResponse() {
        var fcgiInterface = new FCGIInterface();
        while (fcgiInterface.FCGIaccept() >= 0) {
            var content = """
                    {
                      data: %s,
                      time: %s               \s
                    }
                    """.formatted(isInFigure,
                                String.format(("%.4f"),(double)(startTime-System.currentTimeMillis())/1000));
            var httpResponse = """
                    HTTP/1.1 200 OK
                    Content-Type: text/html
                    Content-Length: %d
                     
                    %s
                    """.formatted(content.getBytes(StandardCharsets.UTF_8).length, content);
            System.out.println(httpResponse);
        }
    }
}
