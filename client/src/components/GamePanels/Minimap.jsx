import React, { Component } from 'react';
import { Graph } from './graph';
import './App.css';

const xCount = 4;
const yCount = 3;
const boxSize = 150;
const probability = 0.6;

const canvasWidth = boxSize * xCount;
const canvasHeight = boxSize * yCount;
const radius = boxSize / 8;

export class Edge {
  constructor(destination) {
    this.destination = destination;
  }
}

/**
 * Vertex
 */
export class Vertex {
  constructor(value, edges = []) {
    this.value = value;
    this.edges = edges;
  }
}

/**
 * Graph
 */
export class Graph {
  constructor() {
    this.vertexes = [];
  }

  addVertex(value) {
    this.vertexes.push();
  }

  /**
   * Create a random graph
   */
  build(width, height, pxBox, probability = 0.6) {
    // Helper function to set up two-way edges
    function connectVerts(v0, v1) {
      v0.edges.push(new Edge(v1));
      v1.edges.push(new Edge(v0));
    }

    let count = 0;

    // Build a grid of verts
    let grid = [];
    for (let y = 0; y < height; y++) {
      let row = [];
      for (let x = 0; x < width; x++) {
        let v = new Vertex();
        //v.value = 'v' + x + ',' + y;
        v.value = "v" + count++;
        row.push(v);
      }
      grid.push(row);
    }

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (y < height - 1) {
          if (Math.random() < probability) {
            connectVerts(grid[y][x], grid[y + 1][x]);
          }
        }

        if (x < width - 1) {
          if (Math.random() < probability) {
            connectVerts(grid[y][x], grid[y][x + 1]);
          }
        }
      }
    }

    const boxBuffer = 0.8;
    const boxInner = pxBox * boxBuffer;
    const boxInnerOffset = (pxBox - boxInner) / 2;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        grid[y][x].pos = {
          x: (x * pxBox + boxInnerOffset + Math.random() * boxInner) | 0,
          y: (y * pxBox + boxInnerOffset + Math.random() * boxInner) | 0
        };
      }
    }

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.vertexes.push(grid[y][x]);
      }
    }
  }

  dump() {
    let s;

    for (let v of this.vertexes) {
      if (v.pos) {
        s = v.value + " (" + v.pos.x + "," + v.pos.y + "):";
      } else {
        s = v.value + ":";
      }

      for (let e of v.edges) {
        s += ` ${e.destination.value}`;
      }
      console.log(s);
    }
  }

  bfs(startVertex) {
    const vertexesToExplore = [];
    vertexesToExplore.push(startVertex);

    while (vertexesToExplore.length) {
      vertexesToExplore[0].edges.forEach(edge => {
        if (!edge.destination.explored) {
          vertexesToExplore.push(edge.destination);
        }
        vertexesToExplore[0].explored = true;
      });
      vertexesToExplore.shift();
    }
    const res = this.vertexes.filter(vertex => vertex.explored === true);
    this.vertexes.forEach(vertex => (vertex.explored = false));
    return res;
  }

  dfs(startVertex) {
    const explorer = vertex => {
      vertex.explored = true;
      vertex.edges.forEach(edge => {
        if (!edge.destination.explored) {
          explorer(edge.destination);
        }
      });
    };
    explorer(startVertex);
    const res = this.vertexes.filter(vertex => vertex.explored === true);
    this.vertexes.forEach(vertex => (vertex.explored = false));
    return res;
  }

  getConnectedComponents() {
    const foundNetworks = [];
    this.vertexes.forEach(vertex => {
      const networkToConsider = this.dfs(vertex);
      if (
        !foundNetworks.find(network => {
          if (!network[0] || !networkToConsider[0]) return null;
          if (network[0].value === networkToConsider[0].value) return network;
          return null;
        })
      )
        foundNetworks.push(networkToConsider);
    });
    return foundNetworks;
  }
}

function addEdge(v0, v1) {
  v0.edges.push(new Edge(v1));
  v1.edges.push(new Edge(v0));
}

class Minimap extends Component {

}