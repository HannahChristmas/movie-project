class User < ApplicationRecord
    has_secure_password

    has_many :movies
    has_many :reviews, through: :movies

    validates :name, presence: true, uniqueness: true
end
