class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :year, :director, :image_url

  has_many :reviews
end
