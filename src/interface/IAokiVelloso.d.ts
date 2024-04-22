export interface ISoilLayerWithoutQuota {
  NSPT: number
  typeSoil: 'S' | 'SM' | 'SMC' | 'SC' | 'SCM' | 'M' | 'MS' | 'MSC' | 'MC' | 'MCS' | 'C' | 'CS' | 'CSM' | 'CM' | 'CMS'
}

export interface ISoilLayer extends ISoilLayerWithoutQuota {
  quota: number
}

interface ISoilParamsVelloso {
  kav: number
  alfaav: number
}

interface ITypeParamsSoil {
  originals: ISoilParamsVelloso
  Danziger_Velloso_Laprovitera: ISoilParamsVelloso
  Monteiro: ISoilParamsVelloso
}

export type IParamsSoilJSON = Record<string, ITypeParamsSoil >

export interface ISoilParams {
  SPT: SPT
  config: {
    author: optionAuthorSoilParams
  }
}

export type IParamsStakeJSON = Record<string, IAuthorStakeParamsVelloso>

interface StakeParamsVelloso {
  F1: number
  F2: number
}

interface IAuthorStakeParamsVelloso {
  originals: StakeParamsVelloso
  Laprovitera_Benegas: StakeParamsVelloso
  Monteiro: StakeParamsVelloso
}

export interface IParamsStake {
  numberType: IValidNumbersStake['numbers']
  numberAuthor: originals | Laprovitera_Benegas | Monteiro
}

export interface IValidNumbersStake {
  numbers: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
}

export interface ISPTWithoutQuota {
  soilLayers: ISoilLayerWithoutQuota[]
  config: {
    inicialQuota: number
    waterLevel: number
  }
}

export interface ISPT extends ISPTWithoutQuota {
  soilLayers: ISoilLayer[]
}

interface layerCPT {
  qc: number
  quota: number
}

export interface ICPT {
  layers: layerCPT[]
  inicialQuota: number
}
