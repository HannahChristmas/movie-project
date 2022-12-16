class UsersController < ApplicationController

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: 201
    end

end
