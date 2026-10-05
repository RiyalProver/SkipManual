import {photoLibrary} from '../data/example-content.mjs';
import {escape} from './ui.mjs';
import dimensions from '../data/photo-dimensions.json' with {type:'json'};

export function photo(name,{eager=false,cls='',alt='',sizes='(max-width: 760px) 100vw, 50vw'}={}) {
  const label=alt||photoLibrary[name]?.[0]||'';
  const size=dimensions[name]||{width:1400,height:934};
  return `<img class="${cls}" src="/images/${name}.webp" srcset="/images/${name}-640.webp 640w, /images/${name}-960.webp 960w, /images/${name}.webp ${size.width}w" sizes="${sizes}" alt="${escape(label)}" width="${size.width}" height="${size.height}" ${eager?'fetchpriority="high"':'loading="lazy"'} decoding="async">`;
}
