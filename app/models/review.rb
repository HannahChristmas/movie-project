class Review < ApplicationRecord
    belongs_to :user 
    belongs_to :movie 

    # validates :review, presence: true
end
