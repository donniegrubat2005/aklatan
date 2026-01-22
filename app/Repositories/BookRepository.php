<?php

namespace App\Repositories;

use App\Models\Book;

class BookRepository implements BookInterface
{
    protected $book;

    public function __construct(Book $book)
    {
        $this->book = $book;
    }


    public function getAll()
    {
        return $this->book->paginate();
    }

    public function getById($id)
    {
        return $this->book->findOrFail($id);
    }

    public function create(array $attributes)
    {
        return $this->book->create($attributes);
    }

    public function update($id, array $attributes)
    {
        return $this->book->findOrFail($id)->update($attributes);
    }


    public function delete($id)
    {
        return $this->book->destroy($id);
    }
}
