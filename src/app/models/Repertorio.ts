
export class Repertorio {
  private _nome: String;
  public get nome(): String {
    return this._nome;
  }
  public set nome(value: String) {
    this._nome = value;
  }

  private _dataestreia: String;
  public get dataestreia(): String {
    return this._dataestreia;
  }
  public set dataestreia(value: String) {
    this._dataestreia = value;
  }

  private _coreografo: String;
  public get coreografo(): String {
    return this._coreografo;
  }
  public set coreografo(value: String) {
    this._coreografo = value;
  }

  private _composicaomusical: String;
  public get composicaomusical(): String {
    return this._composicaomusical;
  }
  public set composicaomusical(value: String) {
    this._composicaomusical = value;
  }

  private _libreto: String;
  public get libreto(): String {
    return this._libreto;
  }
  public set libreto(value: String) {
    this._libreto = value;
  }

  private _personagem_principal: String = '';
  public get personagemPrincipal(): String {
    return this._personagem_principal;
  }
  public set personagemPrincipal(value: String) {
    this._personagem_principal = value;
  }

  private _atos: Number;
  public get atos(): Number {
    return this._atos;
  }
  public set atos(value: Number) {
    this._atos = value;
  }

  private _tipoenredo: String;
  public get tipoenredo(): String {
    return this._tipoenredo;
  }
  public set tipoenredo(value: String) {
    this._tipoenredo = value;
  }

  private _enredo: String;
  public get enredo(): String {
    return this._enredo;
  }
  public set enredo(value: String) {
    this._enredo = value;
  }

  public id?: string;

  public downloadURL?: string;

  public values() {
    return {
      nome: this._nome,
      dataestreia: this._dataestreia,
      coreografo: this._coreografo,
      composicaomusical: this._composicaomusical,
      libreto: this._libreto,
      personagem_principal: this._personagem_principal,
      atos: this._atos,
      tipoenredo: this._tipoenredo,
      enredo: this._enredo,
      downloadURL: this.downloadURL
    }
  }

  constructor(
    nome: String,
    dataestreia: String,
    coreografo: String,
    composicaomusical: String,
    libreto: String,
    personagem_principal: String,
    atos: Number,
    tipoenredo: String,
    enredo: String,
    downloadURL: string
  ) {
    this._nome = nome;
    this._dataestreia = dataestreia;
    this._coreografo = coreografo;
    this._composicaomusical = composicaomusical;
    this._libreto = libreto;
    this._personagem_principal = personagem_principal;
    this._atos = atos;
    this._tipoenredo = tipoenredo;
    this._enredo = enredo;
    this.downloadURL = downloadURL;

  }
}
