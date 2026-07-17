import mongoose, { Schema } from "mongoose";
export declare const UserModel: mongoose.Model<{
    username: string;
    password: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    password: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    username: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    username: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ContentModel: mongoose.Model<{
    title?: string | null;
    link?: string | null;
    type: "twitter" | "youtube";
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title?: string | null;
    link?: string | null;
    type: "twitter" | "youtube";
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title?: string | null;
    link?: string | null;
    type: "twitter" | "youtube";
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title?: string | null;
    link?: string | null;
    type: "twitter" | "youtube";
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, {
    title?: string | null;
    link?: string | null;
    type: "twitter" | "youtube";
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title?: string | null;
    link?: string | null;
    type: "twitter" | "youtube";
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    title?: string | null;
    link?: string | null;
    type: "twitter" | "youtube";
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    title?: string | null;
    link?: string | null;
    type: "twitter" | "youtube";
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const LinkModel: mongoose.Model<{
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, {
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map