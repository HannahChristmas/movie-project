class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :movie_id
end
