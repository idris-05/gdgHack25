import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Network } from 'vis-network';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapPageComponent implements OnInit {
  @ViewChild('networkContainer', { static: true }) networkContainer!: ElementRef;
  roadmapData: any = null;
  network!: Network;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/frontend.json').subscribe(data => {
      this.roadmapData = data;
      this.createGraph();
    });
  }

  createGraph() {
    if (!this.roadmapData) return;

    const nodes = this.roadmapData.nodes.map((node: any) => ({
      id: node.id,
      label: node.label,
      group: node.group
    }));

    const edges = this.roadmapData.edges.map((edge: any) => ({
      from: edge.from,
      to: edge.to
    }));

    const container = this.networkContainer.nativeElement;
    const data = { nodes, edges };
    const options = { layout: { hierarchical: true } };

    this.network = new Network(container, data, options);
  }
}
