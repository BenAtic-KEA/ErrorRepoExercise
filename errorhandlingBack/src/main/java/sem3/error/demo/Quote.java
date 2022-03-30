package sem3.error.demo;

public class Quote {
  static int nextId = 0;

  String quote;
  String ref;
  int id;

  public Quote() { }

  public Quote(String quote, String ref) {
    this.quote =quote;
    this.ref = ref;
    this.id = nextId++;
  }

  public String getQuote() {  return quote;  }

  public void setQuote(String quote) {
    this.quote = quote;
  }

  public String getRef() {return ref;}

  public void setRef(String ref) {this.ref = ref;}

  public int getId() { return id;  }
}