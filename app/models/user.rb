class User < ApplicationRecord
    has_secure_password

    has_many :reviews
    has_many :movies, through: :reviews

    validates :name, presence: true, uniqueness: true
end
