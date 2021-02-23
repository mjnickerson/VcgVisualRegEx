initial_graph = {
    "nodes":[
        {"id": "1","name": "A"},
        {"id": "2","name": "B"},
        {"id": "3","name": "C"},
        {"id": "4","name": "D"},
        {"id": "5","name": "E"},
        {"id": "6","name": "F"},
        {"id": "7","name": "G"}
    ],
    "links":[
        { "source": "1", "target": "2", "sourcename": "A", "targetname":"B"},
        { "source": "2", "target": "3", "sourcename": "B", "targetname":"C"},
        { "source": "3", "target": "4", "sourcename": "C", "targetname":"D"},
        { "source": "4", "target": "5", "sourcename": "D", "targetname":"E"},
        { "source": "5", "target": "6", "sourcename": "E", "targetname":"F"},
        { "source": "6", "target": "7", "sourcename": "F", "targetname":"G"}
    ]
}

empty_graph = {
    "nodes":[],
    "links":[]
}