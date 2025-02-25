import { ArbitraryRelationshipTemplateContentJSON, RelationshipTemplateContentJSON } from "@nmshd/content";

export interface ConnectorRelationshipTemplate {
    id: string;
    isOwn: boolean;
    maxNumberOfAllocations?: number;
    createdBy: string;
    createdByDevice: string;
    createdAt: string;
    content: RelationshipTemplateContentJSON | ArbitraryRelationshipTemplateContentJSON;
    expiresAt?: string;
    forIdentity?: string;
    passwordProtection?: {
        password: string;
        passwordIsPin?: true;
    };
    truncatedReference: string;
}
