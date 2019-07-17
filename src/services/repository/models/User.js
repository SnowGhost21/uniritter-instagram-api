const mongoose = require('mongoose');
const transform = require('model-transform');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    name: { type: String, required: true, },
    username: { type: String, required: true, unique: true },
    feed: [{ type: Schema.Types.ObjectId, ref: 'Photo' }],
    password: {
        type: Schema.Types.String,
        required: true,
        select: false
    },
}, { toJSON: { virtuals: true } });

userSchema.virtual('photos', {
    ref: 'Photo',
    localField: '_id',
    foreignField: 'userId',
    justOne: false
});

const User = mongoose.model('User', userSchema);

transform.toJSON(User, function (rtn) {
    if (this.photos) {
        rtn.photos = this.photos;
    }

    if (this.password) {
        rtn.password = null;
    }
});

module.exports = User;