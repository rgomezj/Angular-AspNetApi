export class ServiceUtils {

  baseUrl: string = "https://localhost:44374/api/";  
  
  readonly AuthServiceURL = this.baseUrl + "auth";
  readonly EntriesURL = this.baseUrl + "Entries";
  
  constructor() { 

  }

  public GetAuthService() {
      
  }
}
