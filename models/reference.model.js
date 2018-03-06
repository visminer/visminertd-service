import mongoose from 'mongoose';

const ReferenceSchema = new mongoose.Schema({
    repository: mongoose.SchemaTypes.ObjectId,
    name: String,
    path: String,
    type: String,
    last_commit_date: Date,
    commits: [String]
});

ReferenceSchema.statics = {

  /**
   * List References filtered by repository id.
   */
  findByRepositorySorted(repository_id) {
    return this.aggregate(
      [
        {
          $match: {
            repository: mongoose.Types.ObjectId(repository_id)
          }
        },
        {
          $project: {
            repository: 1,
            name: 1,
            path: 1,
            type: 1,
            commitsLength: { $size: '$commits' },
            commits: { $slice: [ "$commits", 1 ] },
          }
        },
        { $sort: { commitsLength: -1 } },
      ]
    )
      .exec();
  },
}	

/**
 * @typedef ReferenceModel
 */
export default mongoose.model('ReferenceModel', ReferenceSchema, 'rm_reference');
