import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    }
});

const User = models.User || model("User", UserSchema);

export default User;
