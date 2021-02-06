async function getData() {
    let totaldata = []
    let total_pages = 0
    let requests = []
    /* let r = await fetch('https://jsonmock.hackerrank.com/api/article_users?page=1')
let data = await r.json()
total_pages = data.total_pages
console.log(total_pages)
totaldata = [...data.data]
 */
    for (let i = 1; i <= 2; i++) {
        requests.push(
            `https://jsonmock.hackerrank.com/api/article_users?page=${i}`
        )
    }

    let data = await Promise.all(
        requests.map(async (Url) => {
            let response = await fetch(Url)
            return response.json()
        })
    )

    /* let r =await Promise.all(requests)
       await	r.forEach(async res=>{
          let data = await res.json();
           totaldata = [...totaldata, ...data.data]
          // console.log(totaldata)
        })
console.log(totaldata) */
    console.log(data)
}
getData()
