import { User } from "contexts/morpheus/users/domain/user";
import { Primitives } from "shared/domain/primitives";

const UserSchema = new mongoose.Schema<Primitives<User>>(
	{
		name: {type:String,required:true},
		email: {type:String,required:true,unique:true},
		password: {type:String,required:true},
		notifications: {type:Boolean,required:true},
	},
	{
		collection: 'users',
	}
);

export const UserModel = mongoose.model<Primitives<User>>('User', UserSchema);
