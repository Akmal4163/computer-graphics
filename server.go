package main

import (
	"fmt"
	"net/http"
)

// func TestServer(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprintf(w, "<h1>hello world</h1>")
// }
func main() {
	fmt.Println("server running at port 8000")
	static := http.FileServer(http.Dir("./static"))
	http.Handle("/", static)
	http.ListenAndServe(":8000", nil)
}
