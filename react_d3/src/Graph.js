import React, {useRef} from 'react';
import * as d3 from 'd3';


function Graph(props){
    console.log("Me pinte")
    const canvas = useRef(null)
    const marging = {top:30,right:30, bottom:70, left:60}
    const width = 460 - marging.left - marging.right;
    const height = 400 - marging.top - marging.bottom;
    //document.getElementById()
    const svg = d3.select(canvas.current)
                .append('svg')
                .attr("width",width+marging.left+marging.right)
                .attr("height",height+marging.top+marging.bottom)
                .append('g')
                .attr('transform', `translate(${marging.left},${marging.top})`);

    
    const x = d3.scaleBand()
                .range([0,width])
                .domain(
                    props.data.map((chr) => chr.name)
                )
                .padding(0.2)
    svg.append('g')
        .attr("transform",`translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform","translate(-10,0)rotate(-45)")
        .style("text-anchor","end")

    const y = d3.scaleLinear().domain([0,500]).range([height,0])   
    svg.append("g").call(d3.axisLeft(y))         
    return (
        <div ref={canvas}> 
            {}
        </div>
    )

}

export default Graph 