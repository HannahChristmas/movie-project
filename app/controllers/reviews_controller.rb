class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        reviews = @current_user.reviews.all 
        render json: reviews 
    end

    def create 
        review = @current_user.review.create!(review_params)
        render json: review.movie, status: 201
    end

    def update
        review = @current_user.reviews.find(params[:id])
        review.update!(review_params)
        render json: review
    end
    
    def destroy 
        review = @current_user.reviews.find(params[:id])
        review.destroy 
        head :no_content
    end

    private 

    def review_params
        params.permit(:review, :user_id, :movie_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: 422
    end
end
