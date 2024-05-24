export interface PropsBeatUseFilterBeats {
  [key: string]: any;
}

export interface PropsFiltroUseFilterBeats {
  [key: string]: string | number;
}

export interface PropsUseFilterBeats {
  filtros?: PropsFiltroUseFilterBeats[];
  filtrosNegativos?: PropsFiltroUseFilterBeats[];
  cantidad?: number;
}
