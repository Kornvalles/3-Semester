package exception;

/**
 *
 * @author mikkel
 */
public class ExceptionDTO{

  public ExceptionDTO(int code, String description){
      this.code = code;
      this.message = description;
  }
  private int code;
  private String message;
}

