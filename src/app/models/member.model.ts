import { IdentityDocumentType } from "./IdentityDocumentType";

export interface Member {
    num: number;
    name: string;
    familyName: string;
    accessionDate: Date;
    nationality: string;
    identityDocument: IdentityDocumentType;
    identityNumber: string;
  }
  
