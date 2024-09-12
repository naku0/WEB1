public class JSONParser {
    public static float[] parse(String data){
        var elements = data.split(":");
        float[] jsonValues = new float[3];
        if (elements.length <= 4) {
            return null;
        }try{
            jsonValues[0] = Float.parseFloat((elements[1]).split(",")[0]);
            jsonValues[1] = Float.parseFloat((elements[2]).split(",")[0]);
            jsonValues[2] = Float.parseFloat((elements[3]).split("}")[0].replace("}", ""));
            return jsonValues;
        }catch (Exception e){
            return null;
        }
    }
}
