import BlogTitle from '../../elements/ui/BlogTitle.js';
import BlogItem from '../../elements/widgets/Blog/BlogItem';



export default function Blog(){

    return(
                 <section id="blog">
                 <div class="container">
                  <BlogTitle title ="Today's Blog"/>

                  <div class="row mt-5">
                    
                    <BlogItem/>
                  </div>
            
                    </div>
                    </section>
    );
}