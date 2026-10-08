import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema ({
        Title: {
        type: String,
        required: [true, 'Please provide a title for the todo'],
        trim: true,
        maxlength: [40, 'Title should not be more than 40 characters']
    },
    Description: {
        type: String,
        required: [true, 'Please provide a description for the todo'],
        trim: true,
        maxlength: [200, 'Description should not be more than 200 characters']
    },

    Completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true}); 

export default mongoose.models.TODO || mongoose.model('Todo', todoSchema);