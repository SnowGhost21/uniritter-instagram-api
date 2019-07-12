const mongoose = require('mongoose');
const transform = require('model-transform');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    name: { type: String, required: true },
    username: { type: String, required: true },
    feed: [{ type: Schema.Types.ObjectId, ref: 'Photo' }]
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
});

module.exports = User;