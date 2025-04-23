import mongoose, { Schema, Document, models } from 'mongoose';

export interface IToken extends Document {
    user: mongoose.Types.ObjectId; 
    token: string;
    createdAt: Date; 
    expiresAt: Date;
}

const TokenSchema: Schema = new Schema<IToken>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, required: true },
});

const Token = models.Token || mongoose.model<IToken>('Token', TokenSchema);
export default Token;
