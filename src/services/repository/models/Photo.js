const mongoose = require('mongoose');
const transform = require('model-transform');

const Schema = mongoose.Schema;

const photoSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true
    },
    photoUrl: { type: String, required: true },
    image: { data: Buffer, contentType: String }
}, { toJSON: { virtuals: true } });

photoSchema.virtual('user', {
    ref: 'User',
    localField: 'userId',
    foreignField: '_id',
    justOne: true
});

const Photo = mongoose.model('Photo', photoSchema);

transform.toJSON(Photo, function (rtn) {
    if (this.user) {
        rtn.user = this.user;
    }
});

module.exports = Photo;