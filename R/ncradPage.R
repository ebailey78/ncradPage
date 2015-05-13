.onAttach <- function(...) {
  
  # Create link to javascript and css files for package
  shiny::addResourcePath("ncrad", system.file("www", package="ncradPage"))
  
}

ncradDep <- htmltools::htmlDependency("ncradPage", packageVersion("ncradPage"), src = c("href" = "ncrad"), script = "main.js", stylesheet = "app.css")

ncradPage <- function(..., title = "NCRAD") {
  
  bootstrapPage(tags$head(
                  tags$title(title), 
                  tags$script(src = "ncrad/main.js"), 
                  tags$link(href = "ncrad/app.css", rel = "stylesheet", type = "text/css")
                ),
                tags$div(class = "container",
                  includeHTML(system.file("includes/topnav.html", package="ncradPage")),
                  list(...),
                  includeHTML(system.file("includes/footer.html", package="ncradPage"))
                )
              )
    
}
