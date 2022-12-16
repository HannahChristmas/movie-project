class UsersController < ApplicationController
    skip_before_action :authorize, only: :create 
    
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: 201
    end

end
