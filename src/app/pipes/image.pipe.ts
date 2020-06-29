import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';


@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(path: string, size:string='w500'): string {
    
    //https://image.tmdb.org/t/p/w300/hjQp148VjWF4KjzhsD90OCMr11h.jpg
    
    if(!path){
      return "./assets/croc.jpg";
    }

    const auxUrl= `${ environment.urlImage }/${ size }${ path }`;
    return auxUrl;
  }

}
