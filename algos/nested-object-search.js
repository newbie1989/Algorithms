var data = [
    {
        title: 'topNode',
        children: [
            {
                title: 'node1',
                children: [
                    {
                        title: 'randomNode_1',
                        children: [
                            {
                                title: 'anotherNode'
                            }
                        ]
                    },
                    {
                        title: 'node2',
                        children: [
                            {
                                title: 'randomNode_2',
                                children: [
                                    {
                                        title: 'node3',
                                        children: [
                                            {
                                                title: 'randomNode_3'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

function search(data, name) {
    for (let item of data) {
        if (item.title == name) {
            let result = item
            return result
        }
        if (item.children && item.children.length > 0) {
            let child = search(item.children, name)

            if (child) {
                return child
            }
        }
    }
    return null
}

let res = search(data, 'newNode')
console.log(res)
