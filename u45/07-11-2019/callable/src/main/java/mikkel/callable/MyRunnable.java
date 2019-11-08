package mikkel.callable;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

/**
 *
 * @author mikkel
 */
public class MyRunnable {
    
    public static void main(String[] args) throws InterruptedException {
        
        
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        for(int i=0; i<100; i++) {
            final int j = i;
            
            executor.submit(new Runnable() {
                @Override
                public void run() {
                    System.out.println(j);
                }
            });
            
        }
        executor.shutdown();
        
        executor.awaitTermination(1, TimeUnit.DAYS);
        
    }
    
}
