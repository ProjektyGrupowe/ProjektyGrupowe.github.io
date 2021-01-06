var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.ts","module":"AppRoutingModule","children":[{"path":"posting-details/:id","component":"PostingDetailsComponent"},{"path":"board","component":"JobBoardComponent"},{"path":"board/localization/:localization","component":"JobBoardComponent"},{"path":"board/category/:category","component":"JobBoardComponent"},{"path":"board/language/:requirement","component":"JobBoardComponent"},{"path":"form","component":"FormComponent","canActivate":["RouteGuardService"]},{"path":"profile","component":"ProfileComponent","canActivate":["RouteGuardService"]},{"path":"my-postings","component":"MyPostingsComponent","canActivate":["RouteGuardService"]},{"path":"my-postings/:id","component":"PostingEditComponent","canActivate":["RouteGuardService"]},{"path":"login","component":"LoginComponent"},{"path":"sign-up","component":"SignUpComponent"},{"path":"404","component":"NotFoundComponent"},{"path":"","redirectTo":"/board","pathMatch":"full"},{"path":"**","redirectTo":"404"}],"kind":"module"}]}
