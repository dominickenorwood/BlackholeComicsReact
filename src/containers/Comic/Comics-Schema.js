const comics = {
    "comics" : {
        "comic" : {
            "title" : "{STRING}",
            "price" : "{NUMBER}",
            "description" : "{STRING}",
            "condition" : "{STRING}",
            "issue" : "{NUMBER}",
            "images" : {
                "cover" : "{PATH}",
                "inside" : "[{PATH}]",
                "damage" : "[{PATH}]"
            },
            "meta" : {
                "writer" : "[{STRING}]",
                "pencil" : "[{STRING}]",
                "cover" : "[{STRING}]",
                "publisher" : "[{STRING}]",
                "publishDate" : "{DATE}",
                "volume" : "{NUMBER}",
                "ink" : "[{STRING}]",
                "letters" : "[{STRING}]"
            }
        }
    }
}

export default comics