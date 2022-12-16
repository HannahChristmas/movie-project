class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :year, :director
end
