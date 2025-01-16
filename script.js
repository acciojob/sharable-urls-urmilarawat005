// your code here
  function updateUrl() {
            const name = document.getElementById("name").value;
            const year = document.getElementById("year").value;
            
            let baseUrl = "https://localhost:8080/";
            let queryString = "";

            if (name) {
                queryString += "name=" + encodeURIComponent(name);
            }

            if (year) {
                if (queryString) {
                    queryString += "&";
                }
                queryString += "year=" + encodeURIComponent(year);
            }

            document.getElementById("url").textContent = baseUrl + (queryString ? "?" + queryString : "");
        }
