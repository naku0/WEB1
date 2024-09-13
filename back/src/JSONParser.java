public class JSONParser {
    public static double[] parse(String data){
        var elements = data.split(":");
        double[] jsonValues = new double[3];
        try{
            jsonValues[0] = Double.parseDouble(elements[1].split(",")[0]);
            jsonValues[1] = Double.parseDouble(elements[2].split(",")[0]);
            jsonValues[2] = Double.parseDouble(elements[3].split("}")[0].replace("}", ""));
            return jsonValues;
        }catch (Exception e){
            return null;
        }
    }
}
