import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnChanges,
    ViewChild
} from '@angular/core';

declare const echarts;

@Component({
    selector: 'harbor-echarts',
    templateUrl: './harbor-echarts.component.html',
    styleUrls: ['./harbor-echarts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HarborEchartsComponent implements AfterViewInit, OnChanges {
    @Input()
    jsonStringData: string;
    @Input()
    height: string;
    @Input()
    width: string;
    hasViewInit: boolean = false;
    chartInstance: any;
    @ViewChild('echart', {static: false}) echartElementRef: ElementRef;
    constructor() {
    }
    ngAfterViewInit(): void {
        this.chartInstance = echarts.init(this.echartElementRef.nativeElement);
        this.hasViewInit = true;
        this.update();
    }
    ngOnChanges(): void {
        this.update();
    }

    update() {
        if (this.hasViewInit && this.chartInstance && this.jsonStringData) {
            this.chartInstance.setOption(JSON.parse(this.jsonStringData));
        }
    }
}
