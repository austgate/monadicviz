###Monadic Visualisation

This is a simple visualisation script to show links between items, not a 
reference to monads in Functional Programming. 

An example will be posted but the function takes a JSON object and 
creates the visualisations in the form of monads.

It is derived from the ideas at the ArchaID project
(http://www.archaid.org/?portfolio=monadic-visualization).

###Data

        "nodes": [
        {
            "name": "Node name",
            "id": 0,
            "group": 1,
            "count": 4,
            "links": [
                list of ids to which this node is linked
            ],
            "description": [
                {
                    "Hours": [
                        {
                            "Key": "Value"
                        }
                    ]
                }
            ]
        }
    ]

###Requirements

Uses both JQuery and Raphael Javascript libraries.

###Issues

Issues will be posted in the issue queue on Github

###Copyright

Iain Emsley <iain_emsley@austgate.co.uk>

###License

Please see COPYING.md

