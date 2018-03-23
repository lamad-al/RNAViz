function drawGlobalTree(id){ 
                            var width = 1300,
                                height = 650;

                            var cluster = d3.layout.cluster()
                                .size([height, width - 160]);
         
                            var diagonal = d3.svg.diagonal()
                                .projection(function(d) { return [d.y, d.x]; });

                            var svg = d3.select("#main-content-wrapper").append("svg")
                                .attr("width", width)
                                .attr("height", height)
                              .append("g")
                                .attr("transform", "translate(40,0)");

                            d3.json("../php/"+id+".txt", function(root) {
                              var nodes = cluster.nodes(root),
                                  links = cluster.links(nodes);

                              var link = svg.selectAll(".link")
                                  .data(links)
                                .enter().append("path")
                                  .attr("class", "link")
                                  .attr("d", diagonal);

                              var node = svg.selectAll(".node")
                                  .data(nodes)
                                .enter().append("g")
                                  .attr("class", "node")
                                  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

                              node.append("circle")
                                  .attr("r", 4.5);

                                node.on("click", function (d) {

                                var g = d3.select(this); 

                                var ul1 = $("#dendroListLeft");
                                var ul2 = $("#dendroListRight");

                                
                                $("#dendroListLeft").empty();
                                $("#dendroListRight").empty();

                                if(this.__data__.isLeaf) {

                                    var modelJSON = this.__data__.Model;
                                    var depth = this.__data__.depth;

                                    $("#subTitle").text("Model Values");
                                    $("#subTitle2").text("Leaf Depth");

                                    $(".dendroPanelTitle").text("Selected Leaf: "+this.textContent);
                                    $(".dendroPanelTitle").addClass("green");
                                    $(".dendroPanelTitle").removeClass("red");


                                    for (var key in modelJSON) {
                                        ul1.append('<li class="nodedetailsli">' + "Motif: " + key + ' | Occ: ' + modelJSON[key][0] +'</li>')
                                        var check = modelJSON[key][1];

                                        for (var key2 in check) {
                                            ul1.append('<li class="nodedetailsli">' + "Motif: " + key2 + ' | Occ: ' + check[key2] +'</li>')
                                        }

                                    }

                                    ul2.append('<li class="nodedetailsli">' + "Leaf Depth: " + depth + '</li>')
                                }
                                else {
                                    $(".dendroPanelTitle").addClass("red");
                                    $(".dendroPanelTitle").removeClass("green");

                                    $("#subTitle").text("Percentage Values");
                                    $("#subTitle2").text("Node Scores");

                                    $(".dendroPanelTitle").text("Selected Node: "+this.textContent);
                                    var PercentageJSON = this.__data__.score.Percentage;
                                    var varianceJSON = this.__data__.score.Variance;

                                    for (var key in PercentageJSON) {
                                    console.log("Key: " + key);
                                    console.log("Value: " + PercentageJSON[key]);
                                    ul1.append('<li class="nodedetailsli">' + "Motif: " + key + " | % : " + PercentageJSON[key] +'</li>')

                                    }
                                    for (var key in varianceJSON) {
                                        console.log("Key: " + key);
                                        console.log("Value: " + varianceJSON[key]);
                                        ul2.append('<li class="nodedetailsli">' + "Motif: " + varianceJSON[key][0] + " | Score: " + varianceJSON[key][1] +'</li>')
                                    }
                                }
                                });

                              node.append("text")
                                  .attr("dx", function(d) { return d.children ? -8 : 8; })
                                  .attr("dy", 3)
                                  .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
                                  .text(function(d) { return d.name; });
                            });

                            d3.select(self.frameElement).style("height", height + "px");
                        }