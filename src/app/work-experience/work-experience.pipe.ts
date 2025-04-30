import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'splitDot'
})
export class SplitDotPipe implements PipeTransform {

    transform(value: string): string[] {
        return value.split(';');
    }

}