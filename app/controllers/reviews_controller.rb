class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create 
        review = Review.create!(review_params)
        render json: review.movie, status: 201
    end

    

    private 

    def review_params
        params.permit(:review, :user_id, :movie_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: 422
    end
end
